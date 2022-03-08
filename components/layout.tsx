import { cls } from "../libs/utils";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

function Layout({
  title,
  canGoBack,
  hasTabBar,
  children}: LayoutProps) {
  return (
    <div>
      <div className="bg-white w-full text-lg font-medium py-3 fixed text-gray-700 border-b top-0 left-0 flex items-center justify-center">
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls("pt-[4.25rem]", hasTabBar ? "pb-16" : "")}>
        {children}
      </div>
      {hasTabBar ? 
        <nav className="bg-white w-full text-gray-800 border-t fixed bottom-0 left-0 pb-[3.25rem] pt-3 flex justify-center items-center">
          
        </nav> : null}
    </div>
  );
}

export default Layout;