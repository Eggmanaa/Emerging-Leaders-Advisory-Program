# Emerging Leaders Advisory Program

## Project Overview
- **Name**: Emerging Leaders Advisory Program Website
- **Goal**: Provide a comprehensive digital platform for Bishop García Diego High School's leadership development program
- **Features**: Homepage with scope & sequence, interactive session pages, facilitator guides, and program information

## URLs
- **Production**: https://emergingleaders.pages.dev
- **Development**: https://3000-i7zdhyrscumkcpwa7sszu-6532622b.e2b.dev
- **GitHub**: https://github.com/Eggmanaa/Emerging-Leaders-Advisory-Program

## Data Architecture
- **Data Models**: Static content-based architecture with structured session guides
- **Storage Services**: Static assets served from Cloudflare Pages
- **Data Flow**: Server-side rendered content using Hono framework with embedded HTML facilitator guides

## Currently Completed Features
1. ✅ **Homepage** with comprehensive program overview including:
   - School and program logos
   - Mission statement and Catholic integration
   - CASEL Five Core Competencies
   - Implementation model details
   - Program sequence visualization
   - Training sessions overview

2. ✅ **Session 1: Digital Engagement & Attention**
   - Complete facilitator guide based on Jonathan Haidt's "The Anxious Generation"
   - 30-minute structured session with activities and timings
   - Screen time awareness activities and sound bath meditation

3. ✅ **Session 2: The ESSENCE of Adolescence**  
   - Complete facilitator guide based on Daniel Siegel's developmental framework
   - Finger-switching coordination challenge and heads up/heads down game
   - Four developmental tasks exploration (Emotional Spark, Social Engagement, Novelty-seeking, Creative Exploration)

4. ✅ **Session 3: 22 Relational Needs**
   - Complete facilitator guide for relationship building
   - Four categories of relational needs (Security, Attention, Importance, Access)
   - Interactive relationship mapping and small group discussions

5. ✅ **Session 4: Zones of Emotional Regulation**
   - Complete facilitator guide based on Polyvagal Theory by Stephen W. Porges
   - Emotional intensity spectrogram and telephone charades activities
   - Three zones framework (Red, Green, Blue) with regulation strategies
   - Practical grounding techniques (breathing, 5 senses, feet grounding)

6. ✅ **Session 5: 7 Types of Relationships**
   - Complete facilitator guide based on Dr. John Townsend's "People Fuel"
   - Ultimate Ninja icebreaker game and relationship diagramming activity
   - Seven C's of relationships (Coaches, Comrades, Casuals, Colleagues, Care, Chronics, Contaminants)
   - Most Trusted Adult identification and relationship mapping

7. ✅ **Navigation System**
   - Responsive navigation between all pages
   - Breadcrumb navigation for session pages
   - Professional styling with Inter font and school colors

8. ✅ **Responsive Design**
   - Mobile-friendly layout
   - Professional Catholic school aesthetic
   - Consistent branding with school colors (#1e3a8a blue, #d97706 orange)

## Functional Entry URIs
- **/** - Homepage with complete scope and sequence
- **/session-1** - Digital Engagement & Attention facilitator guide (Haidt's Anxious Generation)
- **/session-2** - ESSENCE of Adolescence facilitator guide (Siegel's Developmental Framework)
- **/session-3** - 22 Relational Needs facilitator guide (Relationship Building)
- **/session-4** - Zones of Emotional Regulation facilitator guide (Polyvagal Theory)
- **/session-5** - 7 Types of Relationships facilitator guide (Townsend's People Fuel)

## Features Not Yet Implemented
1. **Cloudflare Pages Deployment** - Ready for production deployment
2. **Print-Optimized Styling** - Session pages include print CSS for facilitator use
3. **Interactive Elements** - Could add student response collection, progress tracking
4. **Admin Dashboard** - Potential future feature for program coordinators
5. **Search Functionality** - Could add search across session content

## Recommended Next Steps for Development
1. **Deploy to Cloudflare Pages** - Set up production environment with custom domain
2. **Enhance Print Layout** - Optimize facilitator guide printing for classroom use
3. **Add Analytics** - Track session usage and engagement with Google Analytics
4. **Implement Contact Forms** - Allow program inquiries and student applications
5. **Create Admin Features** - Cohort management and progress tracking dashboard
6. **Add Search Functionality** - Enable search across all session content and activities

## User Guide
### For Program Administrators:
1. **Homepage** displays complete program overview for stakeholders and parents
2. **Session Pages** provide detailed facilitator guides with timing and instructions
3. **Print Functionality** allows printing of individual session guides for offline use

### For Student Leaders:
1. Navigate to specific session pages for facilitation preparation
2. Review activity instructions and expected outcomes
3. Access timing guides and reflection questions
4. Use print versions during actual facilitation sessions

### For Stakeholders:
1. Review program mission and Catholic integration on homepage
2. Understand CASEL competency alignment
3. See implementation model and training structure
4. Access session overviews to understand program depth

## Deployment
- **Platform**: Cloudflare Pages
- **Status**: ✅ Production Live at https://emergingleaders.pages.dev
- **Tech Stack**: Hono + TypeScript + Vite + Tailwind-inspired CSS
- **Project Name**: emergingleaders
- **Last Updated**: 2024-09-24

## Technical Notes
- Built with Hono framework for edge deployment
- Embedded HTML session content preserves original formatting
- Responsive CSS Grid layouts for modern browser support
- FontAwesome icons for professional UI elements
- Inter font family for excellent readability