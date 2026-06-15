import { requireRole } from '@/lib/api/core/session';


const Seekerlayout = async ({children}) => {
    await requireRole("seeker");
  return children
}

export default Seekerlayout