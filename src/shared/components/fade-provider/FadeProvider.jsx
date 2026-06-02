import { useScrollFadeIn } from "@/shared/hooks/use-scroll-fade-in/useScrollFadeIn";

export const FadeProvider = ({ children, className = "" }) => {
  const { ref, isVisible } = useScrollFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};
