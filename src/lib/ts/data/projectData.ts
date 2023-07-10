import type { IconType } from "svelte-awesome/components/Icon.svelte";

export type ProjectType = "minipainting" | "running"

export const PROJECT_ICONS: Record<ProjectType, IconType> | IconType = [
    "minipainting": "beer"
]