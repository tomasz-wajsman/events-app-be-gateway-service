import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import Paths from '@src/common/constants/Paths';
import { Router } from 'express';

const router = Router();

router.get(Paths.Base, (_req, res) => {
  res.status(HttpStatusCodes.OK).json({ message: 'Hello' });
});

export default router;
