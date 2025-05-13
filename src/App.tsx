
import { ContactForm } from "./components/ContactForm";
import { Toaster } from "sonner";

function App() {
  // Disable right-click functionality
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50" onContextMenu={handleContextMenu}>
      <main className="container mx-auto py-10 px-4">
        <ContactForm />
      </main>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
