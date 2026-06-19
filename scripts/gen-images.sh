#!/usr/bin/env bash
# Generate all images for environmentalcontractorsinsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/environmentalcontractorsinsurance.com/public/images"
mkdir -p "$OUT"

gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps)..."
    curl -s --max-time 180 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" '{inputs:$p, parameters:{num_inference_steps:$s}}')" \
      -o "$dest"
    local ftype
    ftype=$(file -b "$dest" 2>/dev/null)
    local sz
    sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then
      head -c 200 "$dest"; echo ""
    fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 11 images — environmental remediation / hazmat contractor operations ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of an environmental remediation crew in full white hazmat PPE suits and full-face respirators working at a contaminated industrial cleanup site, operating excavation and decontamination equipment, taped containment area, bright clear daylight. Clean earth tones with deep teal and leaf-green accents, high-end commercial industrial photography, no text, no watermark" 4

gen "site-aerial.jpg" \
  "Photorealistic aerial drone view of a large environmental remediation site: excavators working a contaminated soil area, frac tanks and water treatment equipment, containment berms, roll-off boxes, a remediation crew in PPE, clear daylight, organized industrial site. Professional commercial industrial photography, teal and earth tones, no text" 4

gen "pollution-cleanup.jpg" \
  "Photorealistic photo of a soil and groundwater remediation operation: a crew in PPE overseeing a treatment system with pumps, piping and frac tanks at a brownfield site, monitoring equipment, contained excavation. Professional commercial environmental photography, clean earth tones with teal accents, no text" 4

gen "gl-operations.jpg" \
  "Photorealistic photo of an environmental contractor crew in hi-vis vests and hard hats managing a hazardous-materials jobsite at an industrial facility, coordinating an excavation near storage tanks, taped containment and signage, clear daylight. Professional commercial construction photography, clean industrial tones, no text" 4

gen "professional-design.jpg" \
  "Photorealistic close-up of an environmental engineer in a hard hat reviewing site assessment reports, sampling data and remediation design drawings on a tablet and rolled plans at a field office desk, monitoring equipment nearby, soft natural light. Professional commercial photography, clean modern tones, no text" 4

gen "abatement-crew.jpg" \
  "Photorealistic photo of an asbestos and mold abatement crew in full white Tyvek suits and full-face respirators working inside a containment area with poly sheeting, HEPA vacuum and negative-air machine, careful controlled demolition. Bright industrial light, focus on safety and exposure control, professional commercial photography, no text" 4

gen "vacuum-truck.jpg" \
  "Photorealistic photo of a heavy industrial vacuum truck and a tanker truck parked at an environmental cleanup site, hoses connected for transferring contaminated liquids and waste, operator in PPE and hard hat, industrial facility background. Professional commercial photography, clean industrial tones with teal accents, no text" 4

gen "decon-facility.jpg" \
  "Photorealistic photo of the exterior of a remediation contractor's yard and equipment decontamination facility: a clean industrial metal building with roll-up doors, decon wash pad, organized frac tanks and roll-off boxes, fenced yard, clear daylight. Professional commercial industrial photography, clean earth tones, no text" 4

gen "excavator-equipment.jpg" \
  "Photorealistic photo of a large yellow tracked excavator and frac tanks staged at an environmental remediation site, HEPA vacuum and air-monitoring equipment nearby, a crew in PPE, contained soil area, bright daylight. Professional commercial industrial photography, clean earth tones with teal accents, no text" 4

gen "team-portrait.jpg" \
  "Photorealistic professional portrait of a confident environmental remediation contractor wearing a hard hat, safety glasses and hi-vis vest, arms crossed, standing at a cleanup site with excavators and frac tanks behind, genuine trustworthy expression, golden hour light. Commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic cinematic wide banner image of an environmental remediation crew in full hazmat PPE and respirators working at a contaminated industrial cleanup site with excavation equipment, clean earth tones with deep teal and leaf-green accents, professional commercial industrial photography, wide composition, no text, no watermark" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
