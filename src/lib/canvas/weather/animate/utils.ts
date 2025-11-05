export class FrameRate {

    startTime: number = Date.now();
    totalElapsedTime: number = 0;
    frames: number = 0;
    frameRate: number = 0;
    
    calculateFrameRate() {
        this.frames += 1;
        this.totalElapsedTime = Date.now() - this.startTime;
        this.frameRate = this.frames / this.totalElapsedTime * 1000;
    }

    getFrameRate() {
        return this.frameRate;
    }

    getElapsedTime() {
        return this.totalElapsedTime;
    }

}