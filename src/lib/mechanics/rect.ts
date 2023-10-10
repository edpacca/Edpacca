import { Vector2D, reflectionVector } from "./vector";

export type Rect = {
    x1: number
    x2: number
    y1: number
    y2: number
}

export type Collision  = {
    response: Vector2D,
    index: number
}

export function resolveCollisions(
    potentialRect: Rect, originalRect: Rect, 
    collisionRects: Rect[], velocity: Vector2D): Collision | undefined {
    const points = [
        new Vector2D(potentialRect.x1, potentialRect.y1),
        new Vector2D(potentialRect.x2, potentialRect.y1),
        new Vector2D(potentialRect.x1, potentialRect.y2),
        new Vector2D(potentialRect.x2, potentialRect.y2)
    ]

    for (const rect of collisionRects) {
        if (!checkSame(originalRect, rect)) {
            for (const point of points) {
                if (isInRect(point, rect)) {
                    return {
                        response: resolvePointCollision(point, velocity, potentialRect),
                        index: collisionRects.indexOf(rect)
                    } 
                }
            }
        }
    }
    return undefined;
}

export function resolveCollision(rect: Rect, collidingRect: Rect, velocity: Vector2D) {
    const points = [
        new Vector2D(rect.x1, rect.y1),
        new Vector2D(rect.x2, rect.y1),
        new Vector2D(rect.x1, rect.y2),
        new Vector2D(rect.x2, rect.y2)
    ]
    for (const point of points) {
        if (isInRect(point, rect)) {
            return resolvePointCollision(point, velocity, rect);
        }
    }
    return undefined;
}

export function isInRect(point: Vector2D, rect: Rect) {
    return point.x >= rect.x1 && point.x <= rect.x2 && 
        point.y >= rect.y1 && point.y <= rect.y2;
}

function resolvePointCollision(point: Vector2D, velocity: Vector2D, rect: Rect): Vector2D { 
    const rectCentre = getRectCentre(rect);
    const normal = new Vector2D(rectCentre.x - point.x, rectCentre.y - point.y);
    return reflectionVector(velocity, normal);
}

function getRectCentre(rect: Rect): Vector2D {
    const x = rect.x1 + ((rect.x2 - rect.x1) / 2);
    const y = rect.y1 + ((rect.y2 - rect.y1) / 2);
    return new Vector2D(x, y);
}

function checkSame(r1: Rect, r2: Rect) {
    return r1.x1 === r2.x1 &&
        r1.x2 === r2.x2 &&
        r1.y1 === r2.y1 &&
        r1.y2 === r2.y2;
}