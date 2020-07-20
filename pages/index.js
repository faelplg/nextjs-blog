import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';

import {getSortedPostsData} from '../lib/posts';

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello! I'm Rafael (a.k.a <b>Fael</b>). I'm Software Architect and UX Engineer. You can
          contact me on{' '}
          <a href="https://twitter.com/faelplg" target="_blank">
            Twitter
          </a>
          .
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={[utilStyles.headingMd, utilStyles.padding1px].join(' ')}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log('DEBUG: on index.js[getStaticProps] - allPostsData:');
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}
