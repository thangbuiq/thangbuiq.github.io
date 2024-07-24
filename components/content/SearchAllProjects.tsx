'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '1',
    title: 'Garbage Classification Website',
    des: 'Garbage classification website on AWS with Tensorflow ResNet50 as deeplearning model, FastAPI as backend and ReactJs as frontend. Technologies used: Tensorflow, FastAPI, ReactJs, Docker, Github Actions, AWS.',
    category: 'MLOps',
    repo: 'https://github.com/thangbuiq/garbage-classification-web',
    link: 'https://garbage-classification-web.vercel.app/'
  },
  {
    id: '2',
    title: 'COVID-19 ETL Pipeline',
    des: 'A Data Engineering Project that implements an ETL data pipeline with Covid-19 data from multiple sources to a data warehouse for data analysis and visualization. Technologies used: Dagster, Apache Spark, MinIO, MySQL, Postgres, Plotly, Dash, Docker.',
    category: 'Data Engineering - Big Data',
    repo: 'https://github.com/thangbuiq/covid19-etl-pipeline',
    link: 'https://www.youtube.com/watch?v=mO7FiSYrq28'
  },
];

const SearchAllProjects = () => {

  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter(project => project.category.includes(projectSearch.toLowerCase()))

  return (
    <>

      <article className='w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto'>
        {
          resultSearch.map(({ id, title, des, category, repo, link }) => <CardProject key={id} title={title} des={des} category={category} repo={repo} link={link} />)
        }
      </article>
    </>
  )

}

export default SearchAllProjects;
