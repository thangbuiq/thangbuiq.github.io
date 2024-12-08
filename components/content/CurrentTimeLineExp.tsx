'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>
        <TimelineEvent.Title><a target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'><strong className='text-white'>Home Credit Vietnam</strong></a> | aug. 2024 - current</TimelineEvent.Title>

        <TimelineEvent.Description>

            <li><strong className='text-white'> Data Engineer </strong> | Home Racer 2024</li>
            <li> Developing big data pipelines using Spark, Hadoop (Hive), Airflow</li>
            <li> Building PowerBI reports reporting credit metrics like FPD10, FPD30, AR,...</li>
            <li> ... More ... </li>
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title><a target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'><strong className='text-white'>KMS Technology</strong></a> | mar. 2024 - jul. 2024</TimelineEvent.Title>

        <TimelineEvent.Description>

          <li><strong className='text-white'> AI Engineer Intern </strong></li>
            <li> GitOps Deployment of AI applications using Kubernetes, ArgoCD, Helm and GitHub Actions</li>
            <li> Development of LLM agent with CrewAI, LlamaIndex</li>
            <li> Model serving with FastAPI, React JS, and Docker</li>
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title><a target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'><strong className='text-white'>Bosch Global Software Technologies</strong></a> | sep. 2023 - mar. 2024</TimelineEvent.Title>

        <TimelineEvent.Description>

            <li><strong className='text-white'> DevOps Engineer Intern </strong></li>
            <li> Deployment of applications using Docker, Jenkins, GitHub Actions, Terraform</li>
            <li> Implement CI/CD pipelines with store versioning and rollback using JFrog Artifactory</li>
            <li> Write scripts in Python, Bash, and Groovy</li>

        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;