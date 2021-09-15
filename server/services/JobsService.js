import { dbContext } from '../db/DbContext.js'
import { BadRequest, Forbidden } from '../utils/Errors.js'

class JobsService {
  async getJobById(jobId) {
    const job = await dbContext.Jobs.findById(jobId).populate('creator', 'name picture')
    if (!job) {
      throw new BadRequest('Invalid Job Id')
    }
    return job
  }

  async editJob(jobId, userId, jobData) {
    const job = await this.getJobById(jobId)
    if (userId !== job.creatorId.toString()) {
      throw new Forbidden('Nope Nope Nope')
    }
    job.jobTitle = jobData.jobTitle
    job.company = jobData.company
    job.rate = jobData.rate
    job.hours = jobData.hours
    job.description = jobData.description
    await job.save()
    return job
  }

  async removeJob(jobId, userId) {
    const job = await this.getJobById(jobId)
    if (userId !== job.creatorId.toString()) {
      throw new Forbidden('aint happenin')
    }
    await job.remove()
    return job
  }

  async createJob(jobData) {
    const job = await dbContext.Jobs.create(jobData)
    return job
  }

  async getJobs(query) {
    const jobs = await dbContext.Jobs.find(query).populate('creator', 'name picture')
    return jobs
  }
}

export const jobsService = new JobsService()
