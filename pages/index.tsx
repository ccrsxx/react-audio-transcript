import { useState, useEffect, useRef } from 'react';
import {
  PlayIcon,
  PauseIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  DocumentTextIcon
} from '@heroicons/react/24/solid';
import { transcript } from '@lib/transcript';
import { millisToMinutesAndSeconds } from '@lib/helper';
import { SEO } from '@components/common/seo';
import { TranscriptCard } from '@components/transcript-card';
import type { ChangeEvent } from 'react';

type AudioState = 'playing' | 'paused';

export default function Home(): JSX.Element {
  const [audioState, setAudioState] = useState<AudioState>('paused');
  const [audioCurrentDuration, setAudioCurrentDuration] = useState(0);

  const [seek, setSeek] = useState(0);
  const [volume, setVolume] = useState(60);
  const [muted, setMuted] = useState(false);

  const audioElement = useRef<HTMLAudioElement>(null);
  const seekSlider = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!audioElement.current) return;

    const maxDuration = audioElement.current.duration;

    if (seekSlider.current)
      seekSlider.current.max = Math.floor(maxDuration).toString();

    if (audioElement.current.readyState > 0) displayBufferedAmount();
  }, []);

  useEffect(() => {
    if (!audioElement.current) return;

    const seekPercentage =
      (audioElement.current.currentTime / audioElement.current.duration) * 100;

    document.documentElement.style.setProperty(
      '--seek-before-width',
      `${seekPercentage}%`
    );
  }, [seek]);

  useEffect(() => {
    if (!audioElement.current) return;

    const audioVolume = volume / 100;
    const volumePercentage = audioVolume * 100;

    audioElement.current.volume = audioVolume;

    document.documentElement.style.setProperty(
      '--volume-before-width',
      `${volumePercentage}%`
    );
  }, [volume]);

  const displayBufferedAmount = (): void => {
    if (audioElement.current) {
      const bufferedAmount = Math.floor(
        audioElement.current.buffered.end(
          audioElement.current.buffered.length - 1
        )
      );

      const bufferedPercent =
        (bufferedAmount / parseInt(seekSlider.current?.max ?? '0', 10)) * 100;

      document.documentElement.style.setProperty(
        '--buffered-width',
        `${bufferedPercent}%`
      );
    }
  };

  const handleTimeUpdate = (): void => {
    const currentTime = audioElement.current?.currentTime ?? 0;

    setSeek(currentTime);
    setAudioCurrentDuration(currentTime * 1000);
  };

  const handleSeekChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value, 10);

    if (audioElement.current) audioElement.current.currentTime = value;

    setSeek(value);
    setAudioCurrentDuration(value * 1000);
  };

  const handleVolumeChange = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>): void => {
    const newValue = parseInt(value, 10);
    const volumePercentage = (newValue / 100) * 100;

    setVolume(volumePercentage);
  };

  const toggleAudioState = (): void => {
    if (audioState === 'paused') {
      void audioElement.current?.play();
      setAudioState('playing');
    } else {
      audioElement.current?.pause();
      setAudioState('paused');
    }
  };

  const toggleMuted = (): void => {
    if (!audioElement.current) return;

    if (muted) {
      audioElement.current.muted = false;
      setMuted(false);
    } else {
      audioElement.current.muted = true;
      setMuted(true);
    }
  };

  const audioDuration = millisToMinutesAndSeconds(audioCurrentDuration);

  const maxAudioDuration = millisToMinutesAndSeconds(
    parseInt(seekSlider.current?.max ?? '0', 10) * 1000
  );

  return (
    <div className='h-screen p-8'>
      <SEO
        title='Next.js Template'
        description='Generated by create next app.'
      />
      <main
        className='relative mx-auto grid h-full w-full max-w-2xl
                   rounded-md border border-gray-300'
      >
        <section className='flex items-center gap-2 border-b border-gray-300 px-8 py-4'>
          <i>
            <DocumentTextIcon className='h-6 w-6 text-blue-400' />
          </i>
          <h2 className='text-xl font-bold text-gray-700'>Transcript</h2>
        </section>
        <section className='grid gap-4 overflow-y-auto p-4'>
          {transcript.map((data, index) => (
            <TranscriptCard {...data} key={index} />
          ))}
        </section>
        <audio
          src='/transcript.mp3'
          preload='metadata'
          ref={audioElement}
          onProgress={displayBufferedAmount}
          onTimeUpdate={handleTimeUpdate}
        />
        <section
          className='absolute bottom-0 m-4 flex w-full max-w-[calc(100%-3rem)] items-center gap-4 
                     rounded-md border-2 bg-white/60 p-4 backdrop-blur-md'
        >
          <button id='play-icon' onClick={toggleAudioState}>
            {audioState === 'playing' ? (
              <PauseIcon className='h-6 w-6' />
            ) : (
              <PlayIcon className='h-6 w-6' />
            )}
          </button>
          <div className='flex gap-1'>
            <span>{audioDuration}</span>
            <span>/</span>
            <span>{maxAudioDuration}</span>
          </div>
          <input
            className='w-full'
            id='seek-slider'
            type='range'
            value={seek}
            onChange={handleSeekChange}
            ref={seekSlider}
          />
          <button id='mute-icon' onClick={toggleMuted}>
            {muted ? (
              <SpeakerXMarkIcon className='h-6 w-6' />
            ) : (
              <SpeakerWaveIcon className='h-6 w-6' />
            )}
          </button>
          <input
            id='volume-slider'
            className='max-w-24'
            type='range'
            max='100'
            value={volume}
            onChange={handleVolumeChange}
          />
          <output className='w-16'>{Math.round(volume)}</output>
        </section>
      </main>
    </div>
  );
}
