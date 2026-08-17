$ProgressPreference = 'SilentlyContinue'
$ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
$outDir = 'd:\plantjoy\public\images'

$jobs = @(
  @{ name='black-jade';     prompt='Ripe blackberry fruit cluster close-up, dark purple-black glossy berries, fresh on bush, professional food photography, high detail, natural light' },
  @{ name='ponca';          prompt='Blackberry variety Ponca, ripe dark glossy berries on bush with green leaves, close-up, professional food photography' },
  @{ name='graduate';       prompt='Red raspberry fruit cluster, bright red ripe berries, fresh on bush, close-up, professional food photography, natural light' },
  @{ name='golden-autumn';  prompt='Yellow golden raspberry fruit cluster, ripe golden berries, fresh on bush, close-up, professional food photography, natural light' }
)

foreach ($job in $jobs) {
  $name = $job.name
  $prompt = $job.prompt
  $url = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + [uri]::EscapeDataString($prompt) + '&image_size=square_hd'
  $out = Join-Path $outDir ($name + '.jpg')
  Write-Host ('==> ' + $name)
  try {
    Invoke-WebRequest -Uri $url -OutFile $out -UserAgent $ua -TimeoutSec 120
    $f = Get-Item $out
    Write-Host ('    OK size=' + $f.Length + ' bytes')
  } catch {
    Write-Host ('    ERR: ' + $_.Exception.Message)
  }
}

Write-Host '--- done ---'
Get-ChildItem $outDir | ForEach-Object { Write-Host ($_.Name + ' : ' + $_.Length + ' bytes') }
