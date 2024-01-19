export function randomStringGenerator(length: string): string {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let text = "";
    for (let i = 0; i < parseInt(length); i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}