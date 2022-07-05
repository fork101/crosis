type Repl = {
  id: string;
  languag: string;
  slug: string;
  user: string;
  bucket: string;
};

export default function genConnectionMetadata(options?: {
  restrictNetwork?: boolean;
  repl?: Repl;
}): {
  token: string;
  gurl: string;
  conmanURL: string;
  repl: Repl;
};
