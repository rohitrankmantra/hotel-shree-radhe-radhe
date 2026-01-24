"use client"

import { useEffect, useRef, useState } from "react"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { Play, Pause } from "lucide-react"

function VideoCard({
  src,
  title,
  ratio,
  cover = false,
}: {
  src: string
  title: string
  ratio?: number
  cover?: boolean
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [autoRatio, setAutoRatio] = useState<number | null>(null)

  useEffect(() => {
    if (ratio) return
    const v = videoRef.current
    if (!v) return

    const onMeta = () => {
      if (v.videoWidth && v.videoHeight) {
        setAutoRatio(v.videoWidth / v.videoHeight)
      }
    }

    v.addEventListener("loadedmetadata", onMeta)
    return () => v.removeEventListener("loadedmetadata", onMeta)
  }, [ratio])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    video.paused ? video.play() : video.pause()
    setPlaying(!video.paused)
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-md transition">
      <AspectRatio ratio={ratio ?? autoRatio ?? 16 / 9}>
        <div className="relative w-full h-full bg-black">
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full ${
              cover ? "object-cover" : "object-contain"
            }`}
            src={src}
            preload="metadata"
            onClick={togglePlay}
          />

          {!playing && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="grid place-items-center h-14 w-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/30">
                <Play className="h-6 w-6 text-white" />
              </span>
            </button>
          )}

          {playing && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition"
            >
              <span className="grid place-items-center h-12 w-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/30">
                <Pause className="h-5 w-5 text-white" />
              </span>
            </button>
          )}
        </div>
      </AspectRatio>

      <div className="p-3">
        <div className="text-sm font-semibold">{title}</div>
      </div>
    </div>
  )
}

const videos = [
  { src: "/videos/video1.mp4", title: "A tranquil tour of our hotel surroundings" },
  { src: "/videos/video2.mp4", title: "A gentle glimpse of fresh snowfall" },
  { src: "/videos/video3.mp4", title: "Chaurangikhal’s latest snowfall — fresh and pristine" },
  { src: "/videos/video4.mp4", title: "Snow-kissed horizons of Harshil Valley" },
  { src: "/videos/video5.mp4", title: "Peaceful river views flowing near the hotel" },
  { src: "/videos/video6.mp4", title: "Fresh snowfall blanketing the neighborhood" },
  { src: "/videos/video7.mp4", title: "Shimmering river vistas nearby" },
]

export default function GalleryVideos() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold">Video Highlights</h2>
      <p className="text-foreground/70">
        Moments captured in motion from Yamunotri and nearby
      </p>

      {/* TOP 6 — slightly reduced height */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos
          .filter((_, idx) => idx !== 1)
          .map((v, idx) => (
            <VideoCard
              key={idx}
              src={v.src}
              title={v.title}
              ratio={9 / 14}   // 👈 shorter than 9:16
              cover
            />
          ))}
      </div>

      {/* LAST VIDEO — natural desktop ratio */}
      <div className="mt-10 flex justify-center">
        <div className="w-full lg:w-[90%] max-h-[70vh]">
          <VideoCard
            src={videos[1].src}
            title={videos[1].title}
            cover={false}
          />
        </div>
      </div>
    </section>
  )
}
