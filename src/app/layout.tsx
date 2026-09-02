import type { Metadata } from "next";
import "./styles/css/bootstrap.min.css";
import "./styles/css/style.css";
import "./styles/css/responsive.css";
import "./styles/css/bg-images.css";
import "./styles/css/pavingpros.css";
import ClientPreloader from "./components/ClientPreloader";
import ClientErrorBoundary from "./components/ClientErrorBoundary";

export const metadata: Metadata = {
  metadataBase: new URL("https://pavingpros.com"),
  title: {
    default: "Paving Pros | Exclusive Paving Leads in Your Territory",
    template: "%s | Paving Pros",
  },
  description:
    "Join the Paving Pros directory and get asphalt, sealcoating, and concrete leads sent straight to your phone. One contractor per territory. No contract, cancel anytime.",
  icons: { icon: "/assets/images/favicon.png" },
  openGraph: {
    type: "website",
    siteName: "Paving Pros",
    title: "Paving Pros | Exclusive Paving Leads in Your Territory",
    description:
      "One contractor per territory. Qualified paving leads sent straight to your phone. No contract, cancel anytime.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="scroll-smooth">
        <ClientErrorBoundary>
          <ClientPreloader />
          {children}
        </ClientErrorBoundary>
      </body>
    </html>
  );
}
