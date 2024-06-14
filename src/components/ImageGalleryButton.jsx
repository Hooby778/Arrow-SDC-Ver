import React from 'react';

function ImageGalleryButton({
  children, styles, cb, testid,
}) {
  return (
    <button
      data-testid={testid}
      className={`absolute top-1/2 -translate-y-1/2 text-6xl ${styles}`}
      onClick={(e) => {
        cb();
        e.stopPropagation();
      }}
    >
      {children}
    </button>
  );
}

export default ImageGalleryButton;
