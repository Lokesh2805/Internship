import React, { useEffect } from 'react';

const BlobAnimation = () => {
    useEffect(() => {
        const canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
    
        const ctx = canvas.getContext('2d');
        const pointer = { x: 0, y: 10000 };
        const blobs = [];
        const Ni = 48;
        const rad = 100;
    
        for (let i = 0; i < Ni; i++) {
          blobs.push(
            new Blob(
              rad * Math.cos((2 * Math.PI) / Ni * i),
              rad * Math.sin((2 * Math.PI) / Ni * i)
            )
          );
        }
    
        function Blob(x, y) {
          this.blob = document.createElement('canvas');
          this.blob.width = this.blob.height = rad * 2;
          const ict = this.blob.getContext('2d');
          ict.fillStyle = "#fff";
          ict.arc(rad, rad, rad, 0, 2 * Math.PI);
          ict.fill();
          this.x = x;
          this.y = y;
          this.x0 = x;
          this.y0 = y;
          this.r = rad * rad * 1.6;
        }
    
        Blob.prototype.anim = function () {
          const dx = pointer.x - this.x - canvas.width * 0.5;
          const dy = pointer.y - this.y - canvas.height * 0.5;
          const d = Math.sqrt(dx * dx + dy * dy);
          this.x = this.x - this.r / d * (dx / d) + (this.x0 - this.x) * 0.5;
          this.y = this.y - this.r / d * (dy / d) + (this.y0 - this.y) * 0.5;
          ctx.drawImage(
            this.blob,
            canvas.width * 0.5 + this.x - rad,
            canvas.height * 0.5 + this.y - rad
          );
        }
    
        function loop(el) {
          el.anim();
        }
    
        function run() {
          requestAnimationFrame(run);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          blobs.forEach(loop);
        }
    
        pointer.y = 10000;
        run();
    
        return () => {
          document.body.removeChild(canvas);
        };
      }, []);

  return (
    <div className="overflow-hidden touch-action-none content-zooming-none user-select-none">
      <div className="absolute bg-white w-full h-full">
        <canvas
          className="absolute top-0 left-0 w-full h-full bg-black" />
      </div>
    </div>
  );
};

export default BlobAnimation;
