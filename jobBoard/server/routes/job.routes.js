import {Router} from 'express';
import {addJob, getAllJobs, getJobById, updateJob, deleteJob} from '../controllers/job.controller.js'

const router = Router();

router.post('/jobs', addJob);

router.get('/jobs', getAllJobs);

router.get('/jobs/:id', getJobById);

router.put('/jobs/:id', updateJob);

router.delete('/jobs/:id', deleteJob);


export default router;
