const ShowWhenReady = ({isLoading, children}) => {
  if (isLoading) {
    return null;
  }
  return(children);
}

export default ShowWhenReady;