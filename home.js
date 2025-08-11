document.addEventListener('DOMContentLoaded', function() {
  if (!document.cookie.includes('CRT_session=active')) {
    window.location.href = 'index.html';
    return;
  }
  
  var f = {
    '100523': '<h2>Research Report</h2><p>ID: 100523</p><p>Date: June 15</p><h3>Content Section:</h3><p>Experimental Process: In this experiment, a standard titanium alloy sample (Ti-6Al-4V) was placed in a stable OPDEX energy field. A continuous OPDEX flow was applied via a Quantrix injector, with energy intensity maintained at 50 kilojoules per second. The experiment lasted for 12 time units (approximately 1 Earth hour). Initial sample states were recorded, and real-time physical parameter changes were monitored using high-resolution scanning electron microscopy (SEM) and X-ray diffraction (XRD) for data acquisition.</p><h3>Experimental Results:</h3><p>OPDEX energy adhesion difficulty is extremely high: The sample surface adhesion coefficient was only 0.05, significantly below the threshold of 0.3, indicating a pronounced repulsive effect.</p><p>Solid material density surge: The average density increased from 4.43 g/cm³ to 8.0 g/cm³, representing an 80% increase.</p><p>Fractures appeared: Microscopic fractures formed on the sample surface and internally, with an average fracture density of 15 per square millimeter and a maximum fracture depth of 100 micrometers.</p><p>Volume showed no significant change: The sample volume change rate was less than ±0.5%, maintaining dimensional stability.</p><h3>Experimental Conclusion:</h3><p>The experiment confirms that OPDEX energy exhibits low adhesion in solid materials, likely due to molecular-level repulsive forces. The density surge is attributed to lattice structure compression, leading to internal stress accumulation and fracture formation. The unchanged volume indicates no phase transition or expansion occurred. This poses limitations for OPDEX energy applications in solid-state devices (e.g., energy storage units), necessitating further research into interface modification techniques.</p><h3>Notes Section:</h3><p>Quantrix injector: An energy transmission device.</p>',
    
    '100704': '<h2>Research Report</h2><p>ID: 100704</p><p>Date: June 20</p><h3>Content Section</h3><p>Experimental Process:<br>A controlled experiment compared planar substrates (Group A) with nano-cone array substrates (Group B, tip curvature radius ≈200nm). Both groups used silicon wafers (99.999% purity) under identical OPDEX fields (50 kJ/s, Quantrix injector). Energy distribution was monitored via a Stellaron Field Mapper, with a 12-time-unit duration.</p><h3>Experimental Results:</h3><p>Adhesion Bias:<br>Group A (Planar): Surface adhesion coefficient = 0.07 (±0.02)<br>Group B (Tips): Adhesion coefficient at tips = 0.85±0.03, with energy density peaking at cone apices (Fig.1).</p><p>Stability Difference:<br>Group A energy retention time ≤5 sec;<br>Group B tip retention time ≥120 sec without significant decay (p<0.01).</p><p>Structural Integrity:<br>Group B cones showed zero fractures (density surge +15% only), while Group A developed macro-cracks (consistent with Report 100123).</p><h3>Experimental Conclusion:</h3><p>OPDEX energy exhibits significant adhesion preference for high-curvature tip structures, with stability attributed to Field-Induced Focusing. Tip-based designs mitigate density surge risks, providing an optimization path for solid-state energy receivers (e.g., OPDEX rectennas). Biological compatibility verification is required before advancing to in vivo trials.</p><h3>Notes Section:</h3><p>Stellaron Field Mapper: A 3D energy field mapping device.</p>'
  };
  
  var g = document.getElementById('d-content');
  var h = document.querySelectorAll('.c');
  
  h.forEach(function(i) {
    i.addEventListener('click', function() {
      g.innerHTML = f[this.dataset.id];
    });
  });
});
