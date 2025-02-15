<style>
  el-carousel {
    display: block;
    color: var(--blue);
    width: 100%;
    position: relative;
    height: min(570px, 46vw);
    mix-blend-mode: multiply;
  }

  el-carousel img {
    position: absolute;
    top: 0;
    right: 1rem;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.6s ease-in-out;
    opacity: 0;
    user-select: none;
  }

  el-carousel img.active {
    opacity: 1;
  }

  el-carousel #dots {
    position: absolute;
    bottom: 16%;
    left: 0px;
  }

  el-carousel #dots>i {
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin: 1vw;
    border: 4px solid var(--gray);
    border-radius: 50%;
    display: inline-block;
    transition: all 0.6s ease;
  }

  el-carousel #dots>.active {
    background: var(--blue);
    border-color: var(--blue);
  }

  el-carousel #text {
    position: absolute;
    left: 0;
    top: 9%;
    line-height: 1.1;
    font-size: min(4.15rem, 4.6vw);
    
    /*text banneru posunuty vice k vertikalnimu stredu*/  
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    height: 60%;
  }

  el-carousel #text b {
    font-weight: 900;
  }

  /*mobilni verze banneru*/
  body.MOBIL #carousel{
    width: 100%;
    padding:0px;
  }
  body.MOBIL el-carousel{
    height:450px; 
  }
  body.MOBIL el-carousel #text {
    width:100%;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    top:250px;
    margin-top: 1rem;
    height: auto;
    font-size: 1.5rem;
  }
  body.MOBIL el-carousel #text,    
  body.MOBIL el-carousel #text * {
    text-align: center;
  }
  body.MOBIL el-carousel img {
    height:250px;
    left: 50%;
    transform: translateX(-50%);
    object-fit: cover;        
  }

  body.MOBIL el-carousel #dots {
    width:100%;
    text-align: center;
    bottom: 60px;
  }
  body.MOBIL el-carousel #dots i {
    margin-left: 1rem;
    margin-right: 1rem;
  }

</style>
