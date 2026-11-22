import Giscus, { type GiscusProps, type Theme } from "@giscus/react";
import { useEffect, useState } from "react";
import config from "@/config";

const GISCUS: GiscusProps = {
  repo: config.giscus.repo,
  repoId: config.giscus.repoId,
  category: config.giscus.category,
  categoryId: config.giscus.categoryId,
  mapping: config.giscus.mapping,
  reactionsEnabled: config.giscus.reactionsEnabled,
  emitMetadata: config.giscus.emitMetadata,
  inputPosition: config.giscus.inputPosition,
  lang: config.giscus.lang,
  loading: config.giscus.loading,
};

interface CommentsProps {
  lightTheme?: Theme;
  darkTheme?: Theme;
}

export default function Comments({
  lightTheme = "light",
  darkTheme = "dark",
}: CommentsProps) {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setTheme(root.dataset.theme);
    });

    observer.observe(root, { attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-8">
      <Giscus theme={theme === "dark" ? darkTheme : lightTheme} {...GISCUS} />
    </div>
  );
}
