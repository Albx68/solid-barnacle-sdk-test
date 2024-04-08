export function splitText(text: string): string[] {
    return text.split("")
}
export function joinTextArr(text: string[]): string {
    return text.join("")
}
export default { splitText, joinTextArr };