'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://kms-technology.com/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'><strong className='text-white'>KMS Technology</strong></a> | mar. 2024 - Currently</TimelineEvent.Title>

        <TimelineEvent.Description>

            <li><strong className='text-white'> AI Engineer</strong></li>
            <li> Deployment of AI applications using Kubernetes, ArgoCD, Helm and GitHub Actions</li>
            <li> Development of LLM agent with CrewAI, LlamaIndex, and ML models using TensorFlow, PyTorch</li>
            <li> Model serving with FastAPI, ReactJs, and Docker</li>

        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title><a href='https://www.bosch-softwaretechnologies.com/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'><strong className='text-white'>Bosch Global Software Technologies</strong></a> | sep. 2023 - mar. 2024</TimelineEvent.Title>

        <TimelineEvent.Description>

            <li><strong className='text-white'> DevOps Engineer</strong></li>
            <li> Deployment of applications using Docker, Jenkins, GitHub Actions, Terraform</li>
            <li> Implement CI/CD pipelines with store versioning and rollback using JFrog Artifactory</li>
            <li> Write scripts in Python, Bash, and Groovy</li>

        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;