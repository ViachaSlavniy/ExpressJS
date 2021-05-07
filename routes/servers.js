import { Router } from 'express';
import { getAll, createServer, deleteServer } from './../controllers/servers.js';
const router = Router();

// router.get('/api/server', (req, res) => {
//     res.json({test: 42});
// })

router.get('/api/server', getAll);

router.post('/api/server', createServer);

router.delete('/api/server/:id', deleteServer)

export default  router;