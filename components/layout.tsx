import ReactMarkdown from 'react-markdown';

interface LayoutProps {
  children?: React.ReactNode;
  aiResponse?: string;
}

export default function Layout({ children, aiResponse }: LayoutProps) {

  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="h-16 border-b border-b-slate-200 py-4">
          <nav className="ml-4 pl-6">
            <a href="#" className="hover:text-slate-600 cursor-pointer">
              Home
            </a>
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
          {aiResponse && (
            <div className="mt-4 border-t pt-4">
              <h4 className="text-xl font-bold mb-2">AI's Response:</h4>
              <ReactMarkdown>{aiResponse}</ReactMarkdown>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
