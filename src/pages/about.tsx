import React from 'react';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import { ToastAction } from '../components/ui/toast';

export const About = (): JSX.Element => {
  const { toast } = useToast();
  return (
    <Layout
      customMeta={{
        title: 'About - Marjannnnnn',
      }}
    >
      <h1>About Page</h1>
      <p>Welcome to the about page</p>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up ',
            description: 'Friday, February 10, 2023 at 5:57 PM',
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>
    </Layout>
  );
};

export default About;
