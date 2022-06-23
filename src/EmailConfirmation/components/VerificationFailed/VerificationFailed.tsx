import { EmailConfirmationResult } from '../../EmailConfirmationResult';
import checkmark from './assets/approved.svg';
import fail from './assets/fail.svg';

import classes from './VerificationFailed.module.css';

interface VerificationCardProps {
    result: EmailConfirmationResult
}

export const VerificationCard: React.FC<VerificationCardProps> = ({result}) => {
  return (
    <div className={classes.verificationFailed}>
      <div className={classes.verificationCard}>
        <img src={result.verified ? checkmark : fail} className={classes.approved}  alt="checkmark" />
        <h1 className={classes.title}>{result.title}</h1>
        <div>{result.description}</div>
      </div>
    </div>
  );
}

