/** Renders `code` spans and **bold** from lightly marked-up text. */
export default function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith('`') && part.endsWith('`') && part.length > 1 ? (
          <code key={i}>{part.slice(1, -1)}</code>
        ) : part.startsWith('**') && part.endsWith('**') && part.length > 4 ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          part
        ),
      )}
    </>
  )
}
