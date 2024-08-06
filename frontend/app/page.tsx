'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styles from './page.module.scss';
import { Button, TextInput } from '@mantine/core';
const queryClient = new QueryClient();

export default function Home() {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.container}>
        <div className={styles.form}>
          <TextInput label="Username" placeholder="Enter your username" mb="md" />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            mb="md"
            type="password"
          />
          <Button onClick={handleClick}>Sign in</Button>
        </div>
      </main>
    </QueryClientProvider>
  );
}
