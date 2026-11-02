import React, { useState } from 'react';
import { CharacterStyleItem } from '../data/characterArtStylesData';

interface CharacterArtPreviewProps {
  item: CharacterStyleItem;
  className?: string;
  isEnlarged?: boolean;
}

export const CharacterArtPreview: React.FC<CharacterArtPreviewProps> = ({ 
  item, 
  className = '',
  isEnlarged = false 
}) => {
  const { number, name, imageUrl, fallbackUrl } = item;
  const [imgSrc, setImgSrc] = useState<string>(imageUrl);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleError = () => {
    if (imgSrc !== fallbackUrl) {
      setImgSrc(fallbackUrl);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`relative w-full aspect-square overflow-hidden bg-[#181126] select-none ${className}`}>
      {/* Skeleton loader */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#1c1430] animate-pulse flex items-center justify-center">
          <span className="text-xs text-purple-400/50 font-mono">Loading #{number}...</span>
        </div>
      )}

      {/* Realistic Character Image */}
      {!hasError ? (
        <img
          src={imgSrc}
          alt={name}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-cover transition-all duration-300 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${!isEnlarged ? 'group-hover:scale-105' : ''}`}
        />
      ) : (
        /* Graceful stylized fallback if neither local nor CDN loads */
        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#1a1228] to-[#120a1f] text-center">
          <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-2">
            <span className="text-lg font-bold text-amber-400">#{number}</span>
          </div>
          <p className="text-xs font-medium text-purple-200 line-clamp-2">{name}</p>
        </div>
      )}

      {/* Number Badge (top-left, matching reference screenshot) */}
      {!isEnlarged && (
        <div className="absolute top-2.5 left-2.5 z-10">
          <div className="w-6 h-6 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
            <span className="text-[11px] font-bold text-white/90 leading-none">
              {number}
            </span>
          </div>
        </div>
      )}

      {/* Subtle bottom gradient overlay for card mode */}
      {!isEnlarged && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      )}
    </div>
  );
};
