import { randomDirection, randomMinMax } from "../utils";

export class Vector2D {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(vector: Vector2D) {
        this.x += vector.x;
        this.y += vector.y;
    }

    scale(factor: number) {
        this.x *= factor;
        this.y *= factor;
    }

    round() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
    }

    ZERO() {
        this.x = 0;
        this.y = 0;
    }

    isZero() {
        return this.x === 0 && this.y === 0;
    }

    attenuate(factor: number, minMagnitude: number) {
        const attenuatedX = this.x * factor;
        const attenuatedY = this.y * factor;
        this.x = Math.abs(attenuatedX) < minMagnitude ? 0 : attenuatedX;
        this.y = Math.abs(attenuatedY) < minMagnitude ? 0 : attenuatedY;
    }

    reverse() {
        return new Vector2D(this.x * -1, this.y * -1);
    }
}

export function dotProduct(vector1: Vector2D, vector2: Vector2D): number {
    return (vector1.x * vector2.x) + (vector1.y * vector2.y);
}

export function vectorMagnitude(vector: Vector2D): number {
    return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
}

export function reflectionVector(incident: Vector2D, normal: Vector2D) {
    const product = dotProduct(incident, normal);
    const sqrMagnitude = Math.pow(vectorMagnitude(normal), 2);
    const x = incident.x + ((-2 * normal.x * product) / sqrMagnitude);
    const y = incident.y + ((-2 * normal.y * product) / sqrMagnitude);
    return new Vector2D(x, y);
}

export function randomVector(min: number, max: number): Vector2D {
    const x = randomMinMax(min, max) * randomDirection();
    const y = randomMinMax(min, max) * randomDirection();
    return new Vector2D(x, y);
}

export const ZERO_VECTOR = new Vector2D(0, 0);