import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-tr to-[#434343] from-black text-white">
      <div className="w-100 max-w-[600px]">
        <h1 className="text-4xl font-bold mb-6">
          Unlock the Secrets of Your Dreams with DreamScope AI
        </h1>
        <p className="text-lg mb-8">
          Explore your dreams like never before. DreamScope AI analyzes your
          dream entries, providing deep insights and helping you understand your
          subconscious mind.
        </p>
        <Link href="/journal">
          <button className="animated-background bg-gradient-to-bl from-primary to-secondary text-white font-bold py-3 px-6 rounded-lg shadow-2xl transition duration-300 hover:shadow-sm">
            Start Journaling Now
          </button>
        </Link>
      </div>
    </main>
  );
}
