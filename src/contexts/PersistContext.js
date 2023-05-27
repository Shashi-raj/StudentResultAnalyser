export function saveState(state) {
  localStorage.setItem("persist", JSON.stringify(state))
}

export function getState() {
  const state = localStorage.getItem("persist")
  if (!state)
    return {}
  return JSON.parse(state)
}
