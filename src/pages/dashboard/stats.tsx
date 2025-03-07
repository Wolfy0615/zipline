import React from 'react';
import useLogin from 'hooks/useLogin';
import Layout from 'components/Layout';
import Stats from 'components/pages/Stats';
import { LoadingOverlay } from '@mantine/core';
import Head from 'next/head';
export { getServerSideProps } from 'middleware/getServerSideProps';

export default function StatsPage(props) {
  const { user, loading } = useLogin();

  if (loading) return <LoadingOverlay visible={loading} />;

  return (
    <>
      <Head>
        <title>{props.title} - Stats</title>
      </Head>
      <Layout
        user={user}
        props={props}
      >
        <Stats />
      </Layout>
    </>
  );
}