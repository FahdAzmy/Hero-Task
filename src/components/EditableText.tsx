import { useState, useRef, useEffect } from "react";
import { EditableTextProps } from "../types/typs";

export default function EditableText({
  as,
  value,
  onChange,
  className,
}: EditableTextProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedValue, setEditedValue] = useState<string>(value);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEditedValue(value);
  }, [value]);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    if (editedValue.trim() === "") {
      setEditedValue(value); // Revert to original if empty
    } else {
      onChange(editedValue);
      localStorage.setItem(`hero-${as}`, editedValue); // Save to localStorage
    }
    setIsEditing(false);
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const newValue = e.currentTarget.innerText;
    setEditedValue(newValue);

    // Save cursor position
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const cursorPosition = range.startOffset;

      // Update cursor position after render
      setTimeout(() => {
        if (inputRef.current && selection) {
          const newRange = document.createRange();
          try {
            const textNode = inputRef.current.firstChild || inputRef.current;
            newRange.setStart(
              textNode,
              Math.min(cursorPosition, newValue.length)
            );
            newRange.setEnd(
              textNode,
              Math.min(cursorPosition, newValue.length)
            );
            selection.removeAllRanges();
            selection.addRange(newRange);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (error) {
            // Fallback: place cursor at the end
            newRange.selectNodeContents(inputRef.current);
            newRange.collapse(false);
            selection.removeAllRanges();
            selection.addRange(newRange);
          }
        }
      }, 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleBlur();
    } else if (e.key === "Escape") {
      setIsEditing(false);
      setEditedValue(value);
    }
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(inputRef.current);
      range.collapse(false);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }, [isEditing]);

  const Element = as;

  return (
    <Element
      ref={inputRef}
      className={`${className} ${
        isEditing
          ? "border-2 border-blue-400 p-1 rounded"
          : "cursor-pointer light:hover:bg-gray-100  hover:-translate-y-1 rounded p-1 transition-all duration-200"
      }`}
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
      onClick={handleClick}
      onBlur={handleBlur}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
    >
      {editedValue}
    </Element>
  );
}
