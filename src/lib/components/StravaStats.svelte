<script>
    const id = "24944240"
    const profileUrl = `https://strava.com/athletes/${id}`;
</script>


<a href={profileUrl}
    class="strava-badge- strava-badge-follow"
    target="_blank">
    <img src="//badges.strava.com/echelon-sprite-48.png" alt="Strava" />
</a>


  <style>
    .strava-badge- { 
        display: inline-block; height: 48px; 
    }
    .strava-badge- img { 
        visibility: hidden; height: 48px; 
    }
    .strava-badge-:hover { 
        background-position: 0 -63px; 
    }
    .strava-badge-follow { 
        height: 48px; 
        width: 48px; 
        background: url(//badges.strava.com/echelon-sprite-48.png) 
        no-repeat 0 0; 
    }
  </style>