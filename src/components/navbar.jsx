export default function Navbar() {
    return (
        <header class="bg-gray-900 text-white py-6">
            <div class="container mx-auto flex items-center justify-between">
            <a href="#" class="text-xl font-bold">Durgo Software</a>
            <nav>
                <a href="#home" class="mx-2 hover:text-gray-400">Home</a>
                <a href="#services" class="mx-2 hover:text-gray-400">Services</a>
                <a href="#about" class="mx-2 hover:text-gray-400">About</a>
                <a href="#contact-us" class="mx-2 hover:text-gray-400">Contact</a>
            </nav>
            </div>
        </header>
    );
}