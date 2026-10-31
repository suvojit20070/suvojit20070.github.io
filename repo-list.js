// Live repo list from repos.json (BotRes + portfolio repo excluded)
async function loadRepos(){
  const box = document.getElementById('repo-list');
  if(!box) return;
  try{
    const res = await fetch('repos.json?t=' + Date.now());
    if(!res.ok) throw new Error(res.status);
    const repos = await res.json();
    box.innerHTML = '';
    repos.forEach(r => {
      const a = document.createElement('article');
      a.className = 'entry';
      const meta = [r.lang, r.lic].filter(Boolean).join(' \u00b7 ');
      a.innerHTML =
        '<div class="entry-head"><h3><a href="' + r.url + '" target="_blank" rel="noopener">' + r.name + '</a></h3>' +
        '<span class="meta">' + meta + '</span></div>' +
        (r.desc ? '<p>' + r.desc + '</p>' : '');
      box.appendChild(a);
    });
  }catch(e){
    box.innerHTML = '<p class="detail">Repo list load nahi hui. GitHub par dekh lo: <a href="https://github.com/suvojit20070?tab=repositories" target="_blank" rel="noopener">suvojit20070</a></p>';
  }
}
loadRepos();
