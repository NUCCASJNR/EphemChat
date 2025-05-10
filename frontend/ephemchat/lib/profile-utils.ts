// Save profile image to localStorage
export function saveProfileImage(imageDataUrl: string | null): void {
  if (imageDataUrl) {
    localStorage.setItem("profileImage", imageDataUrl)
  } else {
    localStorage.removeItem("profileImage")
  }
}

// Get profile image from localStorage
export function getProfileImage(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem("profileImage")
}
