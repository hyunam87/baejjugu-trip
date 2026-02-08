export const metadata = {
  title: '배쭈꾸의 여행계획',
  description: '가족 여행 일정 공유 웹앱',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
