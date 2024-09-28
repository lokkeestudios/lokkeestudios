import { Icons, type IconProps } from '@/components/ui/icons';
import { type TypedObject } from 'astro-portabletext/types';
import { motion, useAnimationControls } from 'framer-motion';
import { useCallback, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Refractor, registerLanguage, type Marker } from 'react-refractor';
import css from 'refractor/lang/css';
import json from 'refractor/lang/json';
import tsx from 'refractor/lang/tsx';
import ts from 'refractor/lang/typescript';

registerLanguage(ts);
registerLanguage(tsx);
registerLanguage(css);
registerLanguage(json);

type FileTypeIcons = {
  [fileTypeKey: string]: ({ ...props }: IconProps) => JSX.Element;
};

const fileTypeIcons: FileTypeIcons = {
  ts: Icons.TypeScriptFile,
  tsx: Icons.TsxFile,
  css: Icons.CssFile,
  json: Icons.JsonFile,
};

type CodeBlockProps = {
  filename: string;
  language: string;
  code: string;
  highlightedLines: (number | Marker)[];
} & TypedObject;

function CodeBlock({ filename, language, code, highlightedLines }: CodeBlockProps) {
  const [copiedStatus, setCopiedStatus] = useState<string>();
  const clipboardControls = useAnimationControls();
  const clipboardCheckControls = useAnimationControls();

  const showCopiedStatus = useCallback(() => {
    setCopiedStatus('Copied code');

    void Promise.allSettled([
      clipboardControls.start({
        opacity: [1, 0, 0, 0, 0, 1],
        scale: [1, 0.5, 0.5, 0.5, 0.5, 1],
        transition: {
          duration: 1.25,
        },
      }),
      clipboardCheckControls.start({
        opacity: [0, 1, 1, 1, 1, 0, 0],
        scale: [0.5, 1, 1, 1, 1, 0.5, 0.5],
        transition: {
          duration: 1.25,
          delay: 0.15,
        },
      }),
    ]);

    setCopiedStatus(undefined);
  }, [clipboardControls, clipboardCheckControls]);

  const FileTypeIcon = fileTypeIcons[language] || Icons.File;

  return (
    <div className="not-prose overflow-hidden rounded-md border-0.5 border-neutrals-600 bg-neutrals-900">
      <div className="flex items-center justify-between border-b-0.5 border-neutrals-600 p-3">
        <p className="flex items-center gap-x-2 text-neutrals-200">
          <FileTypeIcon className="size-5" />
          <span className="text-sm">{filename}</span>
        </p>
        <CopyToClipboard
          text={code}
          onCopy={showCopiedStatus}
        >
          <button
            type="button"
            className="relative size-5 text-neutrals-200 transition-colors duration-300 hover:text-neutrals-100 focus-visible:text-neutrals-100"
          >
            <motion.div
              animate={clipboardControls}
              className="absolute inset-0"
            >
              <Icons.ClipboardDocument className="size-5" />
            </motion.div>
            <motion.div
              animate={clipboardCheckControls}
              className="scale-0.5 absolute inset-0 text-success opacity-0"
            >
              <Icons.ClipboardDocumentCheck className="size-5" />
            </motion.div>
          </button>
        </CopyToClipboard>
      </div>
      <Refractor
        language={language}
        value={code}
        markers={highlightedLines}
      />
      <p
        aria-live="polite"
        aria-atomic="true"
        role="status"
        className="sr-only"
      >
        {copiedStatus && copiedStatus}
      </p>
    </div>
  );
}

export { CodeBlock, type CodeBlockProps };
