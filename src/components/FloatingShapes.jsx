import React from 'react';

const shapes = [
  { type: 'circle', size: 60, top: '10%', left: '5%', color: '#FFD93D', duration: 8, delay: 0 },
  { type: 'square', size: 45, top: '20%', right: '10%', color: '#FF4D8D', duration: 10, delay: 1 },
  { type: 'circle', size: 35, top: '60%', left: '8%', color: '#4D96FF', duration: 12, delay: 2 },
  { type: 'triangle', size: 50, top: '75%', right: '5%', color: '#6BCB77', duration: 9, delay: 0.5 },
  { type: 'square', size: 30, top: '40%', left: '85%', color: '#FFD93D', duration: 11, delay: 1.5 },
  { type: 'circle', size: 25, top: '85%', left: '45%', color: '#FF4D8D', duration: 7, delay: 3 },
  { type: 'triangle', size: 40, top: '15%', left: '50%', color: '#4D96FF', duration: 13, delay: 2.5 },
  { type: 'square', size: 50, top: '50%', right: '15%', color: '#6BCB77', duration: 8, delay: 1 },
  { type: 'circle', size: 20, top: '30%', left: '30%', color: '#FFD93D', duration: 10, delay: 0 },
  { type: 'triangle', size: 35, top: '90%', right: '25%', color: '#FF4D8D', duration: 14, delay: 2 },
  { type: 'circle', size: 40, top: '5%', right: '30%', color: '#6BCB77', duration: 9, delay: 1.5 },
  { type: 'square', size: 28, top: '65%', left: '70%', color: '#4D96FF', duration: 11, delay: 3 },
];

const FloatingShapes = () => {
  return (
    <div className="floating-shapes-container">
      {shapes.map((shape, index) => {
        const style = {
          width: shape.size,
          height: shape.size,
          top: shape.top,
          left: shape.left || undefined,
          right: shape.right || undefined,
          background: shape.color,
          animationName: index % 2 === 0 ? 'float' : 'floatReverse',
          animationDuration: `${shape.duration}s`,
          animationDelay: `${shape.delay}s`,
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
        };

        if (shape.type === 'triangle') {
          style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        }

        return (
          <div
            key={index}
            className={`floating-shape shape-${shape.type}`}
            style={style}
          />
        );
      })}
    </div>
  );
};

export default FloatingShapes;
