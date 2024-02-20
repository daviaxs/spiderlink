export function validateSchedule(schedule: string): boolean {
  const horarioRegex = /^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/
  return horarioRegex.test(schedule)
}
