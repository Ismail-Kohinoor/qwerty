import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'

const SimilarJobs = props => {
  const {SimilarJobData} = props
  const {
    companyLogoUrl,
    id,
    jobDescription,
    employmentType,
    location,
    rating,
    title,
  } = SimilarJobData

  console.log(SimilarJobData)

  return (
    <li>
      <div>
        <img src={companyLogoUrl} alt="similar job company logo" />
        <div>
          <h1> {title} </h1>
          <div>
            <AiFillStar />
            <p> {rating} </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <MdLocationOn />
          <p> {location} </p>
        </div>
        <div>
          <p> {employmentType} </p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs
