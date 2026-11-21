/**
 * FileHeader — every section opens like a page in a case file:
 * a typed file number, a serif title, a meta line, and a
 * handwritten margin note.
 */
export default function FileHeader({ no, title, meta, note }) {
  return (
    <header className="fileHead">
      <div className="fileHead__no">File {String(no).padStart(2, "0")}</div>
      <h2 className="fileHead__title">{title}</h2>
      {meta && <div className="fileHead__meta">{meta}</div>}
      {note && (
        <div className="handNote fileHead__note" aria-hidden="true">
          {note}
        </div>
      )}
    </header>
  );
}
