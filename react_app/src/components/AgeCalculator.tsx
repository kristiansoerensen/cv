interface Props {
    DateOfBirth: Date;
}


function calculateAge(dob: Date) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const AgeCalculator = ({ DateOfBirth }: Props) => {
    return (
        <span>{calculateAge(DateOfBirth)}</span>
    )
}

export default AgeCalculator