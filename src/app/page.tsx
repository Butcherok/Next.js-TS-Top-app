import { Htag, TheFooter, TheHeader, Button } from '@/components';

export default function Home() {
  return (
    <main>
      <TheHeader />
      <Htag tag="h1">text Htag</Htag>
      <Button appearance='primary'>Button</Button>
      <Button appearance='ghost'>Button</Button>

      <TheFooter />
    </main>
  );
}
